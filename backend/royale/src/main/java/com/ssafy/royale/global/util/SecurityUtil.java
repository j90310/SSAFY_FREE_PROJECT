//package com.ssafy.royale.global.util;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
//
//import java.util.Optional;
//
//public class SecurityUtil {
//    private static final Logger logger = LoggerFactory.getLogger(SecurityUtil.class);
//
//    private SecurityUtil() {}
//
//    // SecurityContext에 저장된 유저 정보를 가져오기 위한 Util
//    public static Optional<String> getCurrentUsername(){
//        //authentication이 저장되는 시점은 JwtFilter에 doFilter가 작동할 때 저장된다.
//        final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//
//        if(authentication == null){
//            logger.debug("Security Context에 인증 정보가 없습니다.");
//            return Optional.empty();
//        }
//
//        String username = null;
//        if(authentication.getPrincipal() instanceof UserDetails){
//            UserDetails springSecurityUser = (UserDetails) authentication.getPrincipal();
//            username = springSecurityUser.getUsername();
//        } else if(authentication.getPrincipal() instanceof String){
//            username = (String) authentication.getPrincipal();
//        }
//
//        return Optional.ofNullable(username);
//    }
//}
