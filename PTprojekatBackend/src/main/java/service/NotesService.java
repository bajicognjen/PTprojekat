package service;

import java.util.Collection;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import beans.Notes;
import dao.NotesDAO;

@Path("/notes")
public class NotesService {
	@Context
	ServletContext ctx;

    public NotesService() {
    }

    @PostConstruct
	public void init() {
		if (ctx.getAttribute("notesDAO") == null) {
	    	String contextPath = ctx.getRealPath("");
			ctx.setAttribute("notesDAO", new NotesDAO(contextPath));
		}
	}
    
    @POST
    @Path("/add")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response addNote(Notes note) {
    	NotesDAO notesDAO = (NotesDAO) ctx.getAttribute("notesDAO");
        notesDAO.addNote(note);
        return Response.status(Response.Status.OK).build();
    }
    
    @GET
    @Path("/{username}")
	@Produces(MediaType.APPLICATION_JSON)
    public Collection<Notes> getNotesByUser(@PathParam("username") String username){
    	NotesDAO notesDAO = (NotesDAO) ctx.getAttribute("notesDAO");
    	return notesDAO.getNotesByUser(username);
    }
    
    @DELETE
    @Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
    public void deleteNotes(@PathParam("id") String id){
    	NotesDAO notesDAO = (NotesDAO) ctx.getAttribute("notesDAO");
    	notesDAO.deleteNote(id);	
    }
}
