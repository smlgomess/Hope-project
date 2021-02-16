package com.hopeproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hopeproject.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

}
