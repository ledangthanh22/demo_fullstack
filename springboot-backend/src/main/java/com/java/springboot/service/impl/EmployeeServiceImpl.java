package com.java.springboot.service.impl;

import com.java.springboot.dto.EmployeeRequestDto;
import com.java.springboot.dto.EmployeeResponseDto;
import com.java.springboot.entity.Employee;
import com.java.springboot.repository.EmployeeRepository;
import com.java.springboot.repository.PositionRepository;
import com.java.springboot.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;
    @Autowired
    private PositionRepository positionRepository;

    @Override
    public List<EmployeeResponseDto> getEmployees() {

        return employeeRepository.findAll().stream().map(employee -> {
            EmployeeResponseDto employeeResponseDto = new EmployeeResponseDto();
            employeeResponseDto.setId(employee.getId());
            employeeResponseDto.setFirstName(employee.getFirstName());
            employeeResponseDto.setLastName(employee.getLastName());
            employeeResponseDto.setEmail(employee.getEmail());
            employeeResponseDto.setGender(employee.getGender());
            employeeResponseDto.setPositionName(employee.getPosition().getName());
            return  employeeResponseDto;
        }).collect(Collectors.toList());
    }

    @Override
    public List<EmployeeResponseDto> getPagination(Integer pageNo) {
        Pageable pageable = PageRequest.of(pageNo,5);
        List<EmployeeResponseDto> listEmployees = employeeRepository.findAll(pageable)
                .stream().map(employee -> new EmployeeResponseDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail(),
                employee.getGender(),
                employee.getPosition().getName()))
                .collect(Collectors.toList());
        return listEmployees;
    }

    @Override
    public Employee saveEmployee(EmployeeRequestDto employeeRequestDTO) {
        Employee employee = new Employee();
        employee.setFirstName(employeeRequestDTO.getFirstName());
        employee.setLastName(employeeRequestDTO.getLastName());
        employee.setEmail(employeeRequestDTO.getEmail());
        employee.setGender(employeeRequestDTO.getGender());
        employee.setPosition(positionRepository.findById(employeeRequestDTO.getPositionId()).orElse(null));
        employeeRepository.save(employee);
        return employee;
    }

    @Override
    public String deleteEmployee(Long id) {
        if (employeeRepository.existsById(id)) {
            employeeRepository.deleteById(id);
            return "Delete success!";
        }
        return "This id was not found!";
    }

    @Override
    public Employee getEmployee(Long id) {
        Optional<Employee> result = employeeRepository.findById(id);
        return result.isPresent() ? result.get() : null;
    }

    @Override
    public Employee updateEmployee(EmployeeRequestDto employeeRequestDTO, Long id) {
        Employee newEmployee = employeeRepository.findById(id).get();
        newEmployee.setFirstName(employeeRequestDTO.getFirstName());
        newEmployee.setLastName(employeeRequestDTO.getLastName());
        newEmployee.setEmail(employeeRequestDTO.getEmail());
        newEmployee.setGender(employeeRequestDTO.getGender());
        newEmployee.setPosition(positionRepository.findById(employeeRequestDTO.getPositionId()).orElse(null));
        return employeeRepository.save(newEmployee);
    }
}
