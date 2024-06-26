package dao;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDate;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.StringTokenizer;

import beans.User;
import enums.Gender;
import enums.Role;

public class UserDAO {
    private Map<String, User> users = new HashMap<>();
    private String contextPath;
    
    public UserDAO() {}
    
    public UserDAO(String contextPath) {
        this.contextPath = contextPath;
        loadUsers(contextPath);
    }
    
    private void loadUsers(String contextPath) {
        BufferedReader in = null;
        try {
            File file = new File(contextPath + "/users.txt");
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
                    String username = st.nextToken().trim();
                    String password = st.nextToken().trim();
                    String name = st.nextToken().trim();
                    String surname = st.nextToken().trim();
                    String email = st.nextToken().trim();
                    Gender gender = Gender.valueOf(st.nextToken().trim());
                    LocalDate dateOfBirth = LocalDate.parse(st.nextToken().trim()); 
                    Role role = Role.valueOf(st.nextToken().trim()); 
                    
                    User user = new User(username, password, name, surname, email, gender, role, dateOfBirth);
                    
                    users.put(username, user);
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
    
    public User logInUser(String username, String password) {
    	User user = users.get(username);
    	if(user != null && user.getPassword().equals(password)) {
    		System.out.println("User logged in.");
    		return user;
    	} else {
    		System.out.println("Wrong username and/or password.");
    		return null;
    	}
    }
    
    public void registerUser(User user) {
    	if(doesUserExist(user.getUsername())) {
    		System.out.println("Username still exists.");
    		return;
    	}
    	user.setRole(Role.CLIENT);
    	addUser(user);
		System.out.println("User signed in.");
    }
    
    public boolean doesUserExist(String username) {
    	return users.containsKey(username);
    }
    
    public void addUser(User user) {
    	if(user.getRole() == Role.TRAINER) {
    		System.out.println("Cannot add trainer through the application.");
    		return;
    	}
    	users.put(user.getUsername(), user);
    	saveUsers();
    }
    
    private void saveUsers() {
        BufferedWriter out = null;
        try {	
            File file = new File(contextPath + "/users.txt");
            System.out.println("File path saving: " + file.getAbsolutePath());
            out = new BufferedWriter(new FileWriter(file));
            for (User user : users.values()) {
                out.write(userToFileFormat(user));
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
    
    private String userToFileFormat(User user) {
        return user.getUsername() + ";" +
               user.getPassword() + ";" +
               user.getName() + ";" +
               user.getSurname() + ";" +
               user.getEmail() + ";" +
               user.getGender() + ";" +
               user.getDateOfBirth() + ";" +
               user.getRole() + ";";
    }
	
	public User getUser(String username) {
		loadUsers(contextPath);
        return users.get(username);
    }
	
	public Collection<User> getAll() {
		loadUsers(contextPath);
		return users.values();
	}
	
	
}
