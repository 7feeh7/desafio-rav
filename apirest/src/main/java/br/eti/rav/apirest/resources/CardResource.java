package br.eti.rav.apirest.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.eti.rav.apirest.models.Card;
import br.eti.rav.apirest.repository.CardRepository;

@RestController
@RequestMapping(value = "/api")
public class CardResource {

	@Autowired
	CardRepository cardRepository;
	
	@PostMapping("/cards")
	public Card save(@RequestBody Card card) {
		return cardRepository.save(card);
	}
	
	@DeleteMapping("/cards/{id}")
	public void delete(@PathVariable(value = "id") long id) {
		cardRepository.deleteById(id);
	}
	
	@GetMapping("/cards")
	public List<Card> get(){
		return cardRepository.findAll();
	}
}
