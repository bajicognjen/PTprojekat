package beans;

import java.time.LocalDateTime;

public class Blog {
	private String id;
	private String title;
	private String content;
	private String image;
	private LocalDateTime dateOfPublishing;
	private boolean isDeleted;
	
	public Blog() {
		super();
	}
	public Blog(String id, String title, String content, String image, LocalDateTime dateOfPublishing, boolean isDeleted) {
		super();
		this.id = id;
		this.title = title;
		this.content = content;
		this.image = image;
		this.dateOfPublishing = dateOfPublishing;
		this.isDeleted = isDeleted;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public LocalDateTime getDateOfPublishing() {
		return dateOfPublishing;
	}
	public void setDateOfPublishing(LocalDateTime dateOfPublishing) {
		this.dateOfPublishing = dateOfPublishing;
	}
	public boolean isDeleted() {
		return isDeleted;
	}
	public void setDeleted(boolean isDeleted) {
		this.isDeleted = isDeleted;
	}
	
}
