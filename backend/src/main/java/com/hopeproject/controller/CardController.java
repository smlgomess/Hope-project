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

import com.hopeproject.model.Card;
import com.hopeproject.service.CardService;

@RestController
@RequestMapping("/client")
public class CardController {
	
	@Autowired
	CardService cardService;
	
	/* create a card*/
	@PostMapping("/cards")
	public Card createCard(@Valid @RequestBody Card card) {
		return cardService.save(card);
	}
	
	/* get all cards*/
	@GetMapping("/cards")
	public List<Card> getAllCards(){
		return cardService.findAll();
	}
	
	/*get card by id */
	@GetMapping("/cards/{id}")
	public ResponseEntity<Card> getCardByID(@PathVariable(value ="id") Long cardID){
		Card card = cardService.findOne(cardID);
		if(card==null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(card);
	}
	
	/*update a card */
	@PutMapping("/cards/{id}")
	public ResponseEntity<Card> updateCard(@PathVariable(value = "id") Long cardID, @Valid @RequestBody Card cardDetails){
		Card card = cardService.findOne(cardID);
		if(card == null) {
			return ResponseEntity.notFound().build();
		}
		
		card.setId(cardID);
		card.setTitle(cardDetails.getTitle());
		card.setText(cardDetails.getText());
		card.setLink(cardDetails.getLink());
		
		Card updateCard = cardService.save(card);
		return ResponseEntity.ok().body(updateCard);
	}
	
	/*delete a card*/
	@DeleteMapping("/cards/{id}")
	public ResponseEntity<Card> deleteCard(@PathVariable(value="id") Long cardID){
		
		Card card = cardService.findOne(cardID);
		if(card == null) {
			return ResponseEntity.notFound().build();
		}
		cardService.delete(card);
		
		return ResponseEntity.ok().build();
	}

}
