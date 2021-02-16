package com.hopeproject.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hopeproject.model.Usuario;
import com.hopeproject.repository.UsuarioRepository;
import com.hopeproject.service.UsuarioService;

@RestController
@RequestMapping("/client")
public class UsuarioController {

	@Autowired
	UsuarioService usuarioService;
	
	/* create an user*/
	@PostMapping("/usuarios")
	public Usuario createUser(@Valid @RequestBody Usuario user) {
		return usuarioService.save(user);
	}
	
	/* get all users*/
	@GetMapping("/usuarios")
	public List<Usuario> getAllUsers(){
		return usuarioService.findAll();
	}
	
	/*get users by id */
	@GetMapping("/usuarios/{id}")
	public ResponseEntity<Usuario> getUserByID(@PathVariable(value ="id") Long userID){
		Usuario user = usuarioService.findOne(userID);
		if(user==null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(user);
	}
	
	/*update an user */
	@PutMapping("/usuarios/{id}")
	public ResponseEntity<Usuario> updateUser(@PathVariable(value = "id") Long userID, @Valid @RequestBody Usuario userDetails){
		Usuario user = usuarioService.findOne(userID);
		if(user == null) {
			return ResponseEntity.notFound().build();
		}
		
		user.setId(userID);
		user.setClassification(userDetails.getClassification());
		user.setEmail(userDetails.getEmail());
		user.setName(userDetails.getName());
		user.setNickname(userDetails.getNickname());
		user.setPassword(userDetails.getPassword());
		
		Usuario updateUser = usuarioService.save(user);
		return ResponseEntity.ok().body(updateUser);
	}
	
	/*delete an user*/
	@DeleteMapping("/usuarios/{id}")
	public ResponseEntity<Usuario> deleteUser(@PathVariable(value="id") Long userID){
		
		Usuario user = usuarioService.findOne(userID);
		if(user == null) {
			return ResponseEntity.notFound().build();
		}
		usuarioService.delete(user);
		
		return ResponseEntity.ok().build();
	}
}
