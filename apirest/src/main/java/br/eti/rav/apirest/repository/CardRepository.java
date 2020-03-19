package br.eti.rav.apirest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.eti.rav.apirest.models.Card;

public interface CardRepository extends JpaRepository<Card, Long>{

}
