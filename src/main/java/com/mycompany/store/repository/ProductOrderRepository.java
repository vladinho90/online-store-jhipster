package com.mycompany.store.repository;

import com.mycompany.store.domain.ProductOrder;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the ProductOrder entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ProductOrderRepository extends JpaRepository<ProductOrder, Long> {
    Page<ProductOrder> findAllByCustomerUserLogin(String login, Pageable pageable);

    Optional<ProductOrder> findOneByIdAndCustomerUserLogin(Long id, String s);
}
