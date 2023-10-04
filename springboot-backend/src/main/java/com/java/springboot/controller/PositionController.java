package com.java.springboot.controller;

import com.java.springboot.dto.PositionDTO;
import com.java.springboot.entity.Position;
import com.java.springboot.service.PositionService;
import jakarta.validation.constraints.PastOrPresent;
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
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class PositionController {

    @Autowired
    private PositionService positionService;

    @GetMapping("position")
    public ResponseEntity<List<Position>> getPositions() {
        List<Position> positionList = positionService.getPositions();
        return new ResponseEntity<>(positionList, HttpStatus.OK);
    }

    @GetMapping("/position/{id}")
    public ResponseEntity<Position> getPosition(@PathVariable Long id) {
        Position position = positionService.getPosition(id);
        return new ResponseEntity<>(position, HttpStatus.OK);
    }

    @PostMapping("/add-position")
    public ResponseEntity<Position> addPosition(@RequestBody PositionDTO positionDTO) {
        Position position = positionService.savePosition(positionDTO);
        return new ResponseEntity<>(position, HttpStatus.OK);
    }

    @PutMapping("/edit-position/{id}")
    public ResponseEntity<Position> EditPosition(@RequestBody PositionDTO positionDTO, @PathVariable Long id) {
        Position position = positionService.updatePosition(positionDTO, id);
        return new ResponseEntity<>(position, HttpStatus.OK);
    }

    @DeleteMapping("/delete-position/{id}")
    public ResponseEntity<String> deletePosition(@PathVariable Long id) {
        return new ResponseEntity<>(positionService.deletePosition(id), HttpStatus.OK);
    }
}
