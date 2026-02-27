'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUser, CreateUserInput } from '@/lib/api/users';

type CreateUserParams = CreateUserInput;

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateUserParams) => createUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
}
