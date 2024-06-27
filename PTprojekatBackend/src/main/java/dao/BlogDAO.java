package dao;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.StringTokenizer;
import java.util.stream.Collectors;

import beans.Blog;

public class BlogDAO {
	private Map<String, Blog> blogs = new HashMap<>();
    private String contextPath;
    
    public BlogDAO() {}
    
    public BlogDAO(String contextPath) {
        this.contextPath = contextPath;
        loadBlogs(contextPath);
    }
    
    private void loadBlogs(String contextPath) {
        BufferedReader in = null;
        try {
            File file = new File(contextPath + "/blogs.txt");
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
                    String title = st.nextToken().trim();
                    String content = st.nextToken().trim();
                    LocalDateTime dateOfPublishing = LocalDateTime.parse(st.nextToken().trim()); 
                    boolean isDeleted = Boolean.parseBoolean(st.nextToken().trim());
                    
                    String image = st.nextToken().trim();
                    
                    Blog blog = new Blog(id, title, content, image, dateOfPublishing, isDeleted);
                    
                    blogs.put(id, blog);
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
    
    private void saveBlogs() {
        BufferedWriter out = null;
        try {	
            File file = new File(contextPath + "/users.txt");
            System.out.println("File path saving: " + file.getAbsolutePath());
            out = new BufferedWriter(new FileWriter(file));
            for (Blog blog : blogs.values()) {
                out.write(blogToFileFormat(blog));
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
    
    private String blogToFileFormat(Blog blog) {
        return blog.getId() + ";" +
        		blog.getTitle() + ";" +
        		blog.getContent() + ";" +
        		blog.getDateOfPublishing() + ";" +
        		blog.isDeleted() + ";" +
        		blog.getImage();
    }
    
    public Collection<Blog> getAll(){
    	loadBlogs(contextPath);
    	return blogs.values().stream().filter(blog -> !blog.isDeleted()).collect(Collectors.toList());    
    }
    
    public Blog getById(String id) {
    	loadBlogs(contextPath);
    	Blog blog = blogs.get(id);
    	return (blog != null && !blog.isDeleted()) ? blog : null;
    }
    
    public void addBlog(Blog blog) {
    	Integer maxId = -1;
    	for(String id : blogs.keySet()) {
    		int idNum = Integer.parseInt(id);
    		if(idNum > maxId) {
    			maxId = idNum;
    		}
    	}
    	maxId++;
    	blog.setId(maxId.toString());
    	blogs.put(maxId.toString(), blog);
    	saveBlogs();
    }
    
    public void updateBlog(String id, Blog blog) {
		Blog b = getById(id);
		if (b == null) {
			return;
		} else {
			b.setTitle(blog.getTitle());
			b.setContent(blog.getContent());
			b.setImage(blog.getImage());
		}
        saveBlogs();
	}

	public void deleteBlog(String id) {
		Blog blog = blogs.get(id);
        if (blog != null) {
            blog.setDeleted(true);
            saveBlogs(); 
        }
	}
}
