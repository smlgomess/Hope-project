package com.hopeproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hopeproject.model.Card;

public interface CardRepository  extends JpaRepository<Card, Long> {

}
