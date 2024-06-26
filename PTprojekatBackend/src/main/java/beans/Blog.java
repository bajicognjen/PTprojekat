package beans;

import java.time.LocalDateTime;
import java.util.Collection;

public class Blog {
	private String id;
	private String title;
	private String content;
	private Collection<String> images;
	private LocalDateTime dateOfPublishing;
	private boolean isDeleted;
	
	public Blog() {
		super();
	}
	public Blog(String id, String title, String content, Collection<String> images, LocalDateTime dateOfPublishing, boolean isDeleted) {
		super();
		this.id = id;
		this.title = title;
		this.content = content;
		this.images = images;
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
	public Collection<String> getImages() {
		return images;
	}
	public void setImages(Collection<String> images) {
		this.images = images;
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
