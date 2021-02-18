package com.hopeproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hopeproject.model.Card;
import com.hopeproject.repository.CardRepository;

@Service
public class CardService {

	@Autowired
	CardRepository cardRepository;
	
	/* Create  */
	
	public Card save(Card card) {
		return cardRepository.save(card);
	}
	
	/* List All */
	
	public List<Card> findAll(){
		return cardRepository.findAll();
	}
	
	/* List one */
	
	public Card findOne (Long cardID) {
		return cardRepository.findById(cardID).get();
	}
	
	/* Delete */
	public void delete (Card card) {
		cardRepository.delete(card);
	}

}
