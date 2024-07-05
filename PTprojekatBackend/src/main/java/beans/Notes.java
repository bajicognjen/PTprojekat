package beans;

import java.time.LocalDate;

public class Notes {
	private String id;
    private String username;
    private String content;
    private LocalDate date;
	private boolean isDeleted;

    public Notes() {}

    public Notes(String id, String username, String content, LocalDate date, boolean isDeleted) {
    	this.id = id;
        this.username = username;
        this.content = content;
        this.date = date;
        this.isDeleted = isDeleted;
    }

    public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

	public boolean isDeleted() {
		return isDeleted;
	}

	public void setDeleted(boolean isDeleted) {
		this.isDeleted = isDeleted;
	}
    
}
