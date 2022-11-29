package com.ssafy.royale.domain.user.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Builder
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userSeq;

    @Column(name = "user_email", unique = true, nullable = false)
    private String userEmail;
    @Column(name = "user_password", unique = false, nullable = false)
    private String userPassword;
    @Column(name = "user_name", unique = false, nullable = false)
    private String userName;
    @Column(name = "user_phone", unique = false, nullable = false)
    private String userPhone;
    @Column(name = "user_token", unique = false, nullable = true)
    private String userToken;
    @Column(name = "user_role", unique = false, nullable = true)
    private String userRole;

    @CreationTimestamp
    @Column(name = "REG_DTM", nullable = false)
    private LocalDateTime REG_DTM;

    @UpdateTimestamp
    @Column(name = "MOD_DTM", nullable = true)
    private LocalDateTime MOD_DTM;

    @OneToMany(mappedBy = "user")
    private List<Apply> applies;

    public void updateUser(String userPassword, String userName, String userPhone) {
        this.userPassword = userPassword;
        this.userName = userName;
        this.userPhone = userPhone;
    }

    public void deleteUser() {
        this.userEmail = "탈퇴된 회원(" + this.userSeq + ")의 이메일";
        this.userPassword = "탈퇴된 회원(" + this.userSeq + ")의 패스워드";
        this.userPhone = "탈퇴된 회원(" + this.userSeq + ")의 번호";
    }

    public void saveToken(String userToken) {
        this.userToken = userToken;
    }
}


