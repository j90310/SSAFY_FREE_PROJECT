package com.ssafy.royale.domain.game.dto;

import com.ssafy.royale.domain.user.domain.Apply;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PlayerNode {
    private PlayerNode left;
    private PlayerNode right;
    private Apply player;

    public PlayerNode(Apply data) {
        this.left = null;
        this.right = null;
        this.player = data;
    }
}
