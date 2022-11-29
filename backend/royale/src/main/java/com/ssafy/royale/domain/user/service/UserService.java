package com.ssafy.royale.domain.user.service;

import com.ssafy.royale.domain.user.domain.User;
import com.ssafy.royale.domain.user.dto.*;

public interface UserService {

    boolean emailCheck(String userEmail);
    User createUser(UserCreateRequestDto userCreatePostReq);
    User updateUser(UserUpdateRequestDto userUpdateRequestDto);
    String removeUser(Long userSeq);
    User findUserByUserSeq(Long userSeq);
    User findUserByUserEmail(String userEmail);
    TokenDto doLogin(UserLoginRequestDto userLoginRequestDto);
    TokenDto refresh(TokenRequestDto requestDto);
}
