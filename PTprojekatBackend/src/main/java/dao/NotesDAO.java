package dao;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.StringTokenizer;
import java.util.stream.Collectors;

import beans.Notes;

public class NotesDAO {
    private Map<String, Notes> notes = new HashMap<>();
    private String contextPath;

    public NotesDAO() {}
    
    public NotesDAO(String contextPath) {
    	this.contextPath = contextPath;
    	loadNotes(contextPath);
    }
    
    private void loadNotes(String contextPath) {
        BufferedReader in = null;
        try {
            File file = new File(contextPath + "/notes.txt");
            System.out.println("File path loading: " + file.getAbsolutePath());
            in = new BufferedReader(new FileReader(file));
            String line;
            StringTokenizer st;
            while ((line = in.readLine()) != null) {
                line = line.trim();
                if (line.equals("") || line.indexOf('#') == 0)
                    continue;
                st = new StringTokenizer(line, ";");
                while (st.hasMoreTokens()) {
                    String id = st.nextToken().trim();
                    String username = st.nextToken().trim();
                    String content = st.nextToken().trim();
                    LocalDate date = LocalDate.parse(st.nextToken().trim());
                    boolean isDeleted = Boolean.parseBoolean(st.nextToken().trim());
                    
                    Notes note = new Notes(id, username, content, date, isDeleted);
                    
                    notes.put(id, note);
                }
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            if (in != null) {
                try {
                    in.close();
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }
    }
    
    public Collection<Notes> getAll(){
    	loadNotes(contextPath);
    	return notes.values().stream().filter(note -> !note.isDeleted()).collect(Collectors.toList());    
    }
    

    public Collection<Notes> getNotesByUser(String username) {
    	loadNotes(contextPath);
        Collection<Notes> userNotes = new ArrayList<>();
        for (Notes note : notes.values()) {
            if (note.getUsername().equals(username) && !note.isDeleted()) {
                userNotes.add(note);
            }
        }
        return userNotes;
    }
    
    public void addNote(Notes note) {
    	Integer maxId = -1;
    	for(String id : notes.keySet()) {
    		int idNum = Integer.parseInt(id);
    		if(idNum > maxId) {
    			maxId = idNum;
    		}
    	}
    	maxId++;
    	note.setId(maxId.toString());
    	note.setDate(LocalDate.now());
        notes.put(maxId.toString(), note);
        saveNotes();
    }

    private void saveNotes() {
        BufferedWriter out = null;
        try {	
            File file = new File(contextPath + "/notes.txt");
            System.out.println("File path saving: " + file.getAbsolutePath());
            out = new BufferedWriter(new FileWriter(file));
            for (Notes note : notes.values()) {
                out.write(noteToFileFormat(note));
                out.newLine();
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (out != null) {
                try {
                    out.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    private String noteToFileFormat(Notes note) {
        return note.getId() + ";" +
        	   note.getUsername() + ";" +
               note.getContent() + ";" +
               note.getDate() + ";" +
        	   note.isDeleted();
    }
    
    public void deleteNote (String id) {
    	Notes note = notes.get(id);
        if (note != null) {
            note.setDeleted(true);
            saveNotes(); 
        }
    }
}
