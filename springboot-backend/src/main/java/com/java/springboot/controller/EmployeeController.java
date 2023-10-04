package com.java.springboot.controller;

import com.java.springboot.dto.EmployeeRequestDto;
import com.java.springboot.dto.EmployeeResponseDto;
import com.java.springboot.entity.Employee;
import com.java.springboot.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("pagination")
    public ResponseEntity<List<EmployeeResponseDto>> getPagination(@RequestParam(name = "page") Optional<Integer> pageNo) {
        List<EmployeeResponseDto> list = employeeService.getPagination(pageNo.orElse(null));
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping("employees")
    public ResponseEntity<List<EmployeeResponseDto>> getAllEmployees() {
        List<EmployeeResponseDto> employeeResponseDtoList = employeeService.getEmployees();
        return new ResponseEntity<>(employeeResponseDtoList, HttpStatus.OK);
    }

    @GetMapping("employees/{id}")
    public ResponseEntity<Employee> getAllEmployee(@PathVariable Long id) {
        Employee employee = employeeService.getEmployee(id);
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    @PostMapping("add-employee")
    public ResponseEntity<Employee> addEmployee(@RequestBody EmployeeRequestDto employeeRequestDTO) {
        Employee employee = employeeService.saveEmployee(employeeRequestDTO);
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    @PutMapping("edit-employee/{id}")
    public ResponseEntity<Employee> Employee(@RequestBody EmployeeRequestDto employeeRequestDTO, @PathVariable Long id) {
        Employee employee = employeeService.saveEmployee(employeeRequestDTO);
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    @DeleteMapping("delete-employee/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Long id) {
        return new ResponseEntity<>(employeeService.deleteEmployee(id), HttpStatus.OK);
    }
}
