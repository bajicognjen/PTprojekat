package service;

import java.util.Collection;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import beans.Blog;
import beans.User;
import dao.BlogDAO;
import enums.Role;

@Path("/blogs")
public class BlogService {
	@Context
	ServletContext ctx;
	@Context
    HttpServletRequest request;

	
	public BlogService() {}
	
	@PostConstruct
	public void init() {
		if (ctx.getAttribute("blogDAO") == null) {
	    	String contextPath = ctx.getRealPath("");
			ctx.setAttribute("blogDAO", new BlogDAO(contextPath));
		}
	}
	
	@GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Blog getBlogById(@PathParam("id") String id) {
		BlogDAO dao = (BlogDAO) ctx.getAttribute("blogDAO");
        Blog blog = dao.getById(id);
        if (blog != null) {
            return blog;
        } 
        return null;
    }
	
	@GET
    @Produces(MediaType.APPLICATION_JSON)
    public Collection<Blog> getAll() {
		BlogDAO dao = (BlogDAO) ctx.getAttribute("blogDAO");
		Collection<Blog> blogs = dao.getAll();
		return blogs;
    }
	

	@POST
	@Path("/add")
    @Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response addBlog(Blog blog) {        
		User user = (User) request.getSession().getAttribute("user");
	    if (user != null && user.getRole() == Role.TRAINER) {
	        BlogDAO dao = (BlogDAO) ctx.getAttribute("blogDAO");
	        dao.addBlog(blog);
	        return Response.ok().build();
	    }
	    return Response.status(Response.Status.FORBIDDEN).build();
	}
	
	@PUT
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
    public Response updateBlog(@PathParam("id") String id, Blog blog) {
        User user = (User) request.getSession().getAttribute("user");
        if (user != null && user.getRole() == Role.TRAINER) {
        	BlogDAO dao = (BlogDAO) ctx.getAttribute("blogDAO");
            dao.updateBlog(id, blog);
            return Response.ok().build();
        }
        return Response.status(Response.Status.FORBIDDEN).build();
    }
	
	@DELETE
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response deleteBlog(@PathParam("id") String id) {
		User user = (User) request.getSession().getAttribute("user");
		if (user != null && user.getRole() == Role.TRAINER) {
			BlogDAO dao = (BlogDAO) ctx.getAttribute("blogDAO");
            dao.deleteBlog(id);
            return Response.ok().build();
        }
        return Response.status(Response.Status.FORBIDDEN).build();
	}
}
