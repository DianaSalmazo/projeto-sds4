package com.dianasalmazo.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dianasalmazo.dsvendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
