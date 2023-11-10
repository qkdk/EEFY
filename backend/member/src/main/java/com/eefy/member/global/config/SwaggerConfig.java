package com.eefy.member.global.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springdoc.core.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public GroupedOpenApi allApi() {
        return GroupedOpenApi.builder()
                .group("all")
                .pathsToMatch("/**")
                .build();
    }

    @Bean
    public GroupedOpenApi authApi() {
        return GroupedOpenApi.builder()
                .group("auth")
                .pathsToMatch("/api/auth/**")
                .build();
    }

    @Bean
    public GroupedOpenApi memberApi() {
        return GroupedOpenApi.builder()
                .group("member")
                .pathsToMatch("/api/member/**")
                .build();
    }

    @Bean
    public GroupedOpenApi alarmApi() {
        return GroupedOpenApi.builder()
                .group("alarm")
                .pathsToMatch("/api/alarm/**")
                .build();
    }

    @Bean
    public GroupedOpenApi questionApi() {
        return GroupedOpenApi.builder()
                .group("question")
                .pathsToMatch("/api/question/**")
                .build();
    }

    @Bean
    public GroupedOpenApi lectureAPI() {
        return GroupedOpenApi.builder()
                .group("lecture")
                .pathsToMatch("/api/lecture/**")
                .build();
    }

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .components(new Components())
                .info(new Info().title("API 명세서")
                        .description("EEFY: Member API 명세서")
                        .version("v0.0.1"));
    }
}
