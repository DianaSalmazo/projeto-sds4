package com.dianasalmazo.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dianasalmazo.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
