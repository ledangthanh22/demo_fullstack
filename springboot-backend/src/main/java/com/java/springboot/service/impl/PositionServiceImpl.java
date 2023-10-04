package com.java.springboot.service.impl;

import com.java.springboot.dto.PositionDTO;
import com.java.springboot.entity.Position;
import com.java.springboot.repository.PositionRepository;
import com.java.springboot.service.PositionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PositionServiceImpl implements PositionService {


    @Autowired
    private PositionRepository positionRepository;

    @Override
    public List<Position> getPositions() {
        return positionRepository.findAll();
    }

    @Override
    public Position savePosition(PositionDTO positionDTO) {
        Position position = new Position();
        position.setName(positionDTO.getName());
        position.setDescribe(positionDTO.getDescribe());
        return positionRepository.save(position);
    }

    @Override
    public Position updatePosition(PositionDTO positionDTO, Long id) {
        Position newPosition = positionRepository.findById(id).get();
        newPosition.setName(positionDTO.getName());
        newPosition.setDescribe(positionDTO.getDescribe());
        positionRepository.save(newPosition);
        return newPosition;
    }

    @Override
    public Position getPosition(Long id) {
        Optional<Position> result = positionRepository.findById(id);
        return result.isPresent() ? result.get() : null;
    }

    @Override
    public String deletePosition(Long id) {
        if (positionRepository.existsById(id)) {
            positionRepository.deleteById(id);
            return "Delete success";
        } else {
            return "Not find id: " + id;
        }
    }
}
