package com.java.springboot.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeRequestDto {

    private String firstName;

    private String lastName;

    private String email;

    private Boolean gender;

    private long positionId;
        }
