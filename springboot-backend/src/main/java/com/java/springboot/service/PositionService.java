package com.java.springboot.service;

import com.java.springboot.dto.PositionDTO;
import com.java.springboot.entity.Position;

import java.util.List;

public interface PositionService {

    List<Position> getPositions();

    Position savePosition(PositionDTO positionDTO);

    Position updatePosition(PositionDTO positionDTO,Long id);

    Position getPosition(Long id);

    String deletePosition(Long id);



}
