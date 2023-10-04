package com.java.springboot.service;

import com.java.springboot.dto.EmployeeRequestDto;
import com.java.springboot.dto.EmployeeResponseDto;
import com.java.springboot.entity.Employee;
import org.springframework.data.domain.Page;

import java.util.List;

public interface EmployeeService {

    List<EmployeeResponseDto> getEmployees();

    List<EmployeeResponseDto> getPagination(Integer pageNo);

    Employee saveEmployee(EmployeeRequestDto employeeRequestDTO);

    String deleteEmployee(Long id);

    Employee getEmployee(Long id);

    Employee updateEmployee(EmployeeRequestDto employeeRequestDTO, Long id);
}
