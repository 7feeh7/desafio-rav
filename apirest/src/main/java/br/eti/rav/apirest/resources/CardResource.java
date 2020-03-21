package br.eti.rav.apirest.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.eti.rav.apirest.models.Card;
import br.eti.rav.apirest.repository.CardRepository;
import br.eti.rav.apirest.repository.GrupoRepository;

@RestController
@RequestMapping(value = "/api")
public class CardResource {

	@Autowired
	CardRepository cardRepository;
	
	@Autowired
	GrupoRepository grupoRepository;
	
	@PostMapping("/cards")
	public Card save(@RequestBody Card card) {
		if(!grupoRepository.findById(card.getGrupo().getId()).isPresent()) {
			throw new RuntimeException("Grupo inexistente");
		}
		return cardRepository.save(card);
	}
	
	@PutMapping("/cards")
	public Card update(@RequestBody Card card) {
		if(!grupoRepository.findById(card.getGrupo().getId()).isPresent()) {
			throw new RuntimeException("Grupo inexistente");
		}
		return cardRepository.save(card);
	}
	
	@DeleteMapping("/cards/{id}")
	public void deleteT(@PathVariable(value = "id") long id) {
		cardRepository.deleteById(id);
	}
	
}
