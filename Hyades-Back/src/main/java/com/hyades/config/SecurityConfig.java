package com.hyades.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsUtils;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
        .csrf()
        .disable()
        .headers()
        .disable()

        // JWT
//        .exceptionHandling()
//        .accessDeniedHandler()
//        .authenticationEntryPoint()
//        .and()
//
//        .sessionManagement()
//        .sessionCreationPolicy()
//        .and()

        .authorizeRequests()
        .requestMatchers(request -> CorsUtils.isPreFlightRequest(request)).permitAll()
        .anyRequest().permitAll() // 임시로 모든 요청 허용
        .and()

        .formLogin()
        .disable();
  }
}
