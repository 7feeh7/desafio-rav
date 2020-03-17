package br.eti.rav.apirest.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.eti.rav.apirest.models.Grupo;
import br.eti.rav.apirest.repository.GrupoRepository;

@RestController
@RequestMapping(value = "/api")
public class GrupoResource {
	
	@Autowired
	GrupoRepository grupoRepository;
	
	@GetMapping("/grupos")
	public List<Grupo> get() {
		return grupoRepository.findAll();
	}
	
	@PostMapping("/grupos")
	public Grupo save(@RequestBody Grupo grupo) {
		return grupoRepository.save(grupo);
	}
	
	@PutMapping("/grupos")
	public Grupo update(@RequestBody Grupo grupo) {
		return grupoRepository.save(grupo);
	}
	
	@DeleteMapping("/grupos/{id}")
	public void delete(@PathVariable(value = "id") long id) {
		grupoRepository.deleteById(id);
	}
	
}
