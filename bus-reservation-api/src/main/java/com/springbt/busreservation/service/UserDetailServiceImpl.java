package com.springbt.busreservation.service;


import com.springbt.busreservation.model.Customer;
import com.springbt.busreservation.repository.CustomerRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.stream.Collectors;

/**
 * The type User detail service.
 *
 * @author Givantha Kalansuriya @Project spring -boot-rest-api-auth-jwt-tutorial
 */
@Service
public class UserDetailServiceImpl implements UserDetailsService {

    private CustomerRepository customerRepository;

    /**
     * Instantiates a new User detail service.
     *
     * @param userRepository the user repository
     */
    public UserDetailServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

    	Customer userDetails = customerRepository.findByEmail(email);
        if(userDetails == null){
            throw new UsernameNotFoundException(email);
        }
        Collection<? extends GrantedAuthority> authorities
                = Arrays.asList("admin".split(",")).stream()
                .map(authority -> new SimpleGrantedAuthority(authority))
                .collect(Collectors.toList());
        return new org.springframework.security.core.userdetails.User(userDetails.getEmail(),userDetails.getPassword(), authorities);
    }
}