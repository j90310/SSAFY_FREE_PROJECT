package com.ssafy.royale.domain.game.dto;

import com.ssafy.royale.domain.user.domain.Apply;

import java.util.ArrayList;
import java.util.List;

public class PlayerTree {
    public PlayerNode root;
    public Integer size;
    public boolean turn = true;
    public List<Apply> list = new ArrayList<>();

    public PlayerTree() {
        this.root = null;
        this.size = 0;
    }

    public List<Apply> inorder(PlayerNode root){
        if(root == null) return null;
        inorder(root.getLeft());
        list.add(root.getPlayer());
        inorder(root.getRight());

        return list;
    }

    public boolean insert(Apply data) {
        PlayerNode newNode = new PlayerNode(data);
        PlayerNode cursor = this.root;
        if (root == null) {
            this.root = newNode;
            size++;
            return true;
        }
        while (true){
            if(turn){
                if(cursor.getLeft() == null){
                    cursor.setLeft(newNode);
                    this.turn = false;
                    return true;
                }else if(cursor.getRight() == null){
                    cursor.setRight(newNode);
                    this.turn = false;
                    return true;
                }else{
                    cursor = cursor.getLeft();
                }
            }else{
                if(cursor.getRight() == null){
                    cursor.setRight(newNode);
                    this.turn = true;
                    return true;
                }else if(cursor.getLeft() == null){
                    cursor.setLeft(newNode);
                    this.turn = true;
                    return true;
                }else{
                    cursor = cursor.getRight();
                }
            }
        }
    }
}
