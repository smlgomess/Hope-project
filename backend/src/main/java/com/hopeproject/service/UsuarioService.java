package com.hopeproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hopeproject.model.Usuario;
import com.hopeproject.repository.UsuarioRepository;

@Service
public class UsuarioService {
	
	@Autowired
	UsuarioRepository usuarioRepository;
	
	/* Create  */
	
	public Usuario save(Usuario user) {
		return usuarioRepository.save(user);
	}
	
	/* List All */
	
	public List<Usuario> findAll(){
		return usuarioRepository.findAll();
	}
	
	/* List one user */
	
	public Usuario findOne (Long userID) {
		return usuarioRepository.findById(userID).get();
	}
	
	/* Delete */
	public void delete (Usuario user) {
		usuarioRepository.delete(user);
	}

}
