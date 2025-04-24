package com.fairytale.FairyTale.global.util.user;

import com.fairytale.FairyTale.domain.user.domain.User;
import com.fairytale.FairyTale.domain.user.domain.repository.UserRepository;
import com.fairytale.FairyTale.global.exception.UserNotFoundException;
import com.fairytale.FairyTale.global.util.security.SecurityUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserUtilsImpl implements UserUtils {

    private final UserRepository userRepository;


    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> UserNotFoundException.EXCEPTION);
    }

    @Override
    public User getUserFromSecurityContext() {
        Long currentUserId = SecurityUtils.getCurrentUserId();
        return getUserById(currentUserId);
    }
}
