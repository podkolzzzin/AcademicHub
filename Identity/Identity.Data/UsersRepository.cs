﻿using Microsoft.EntityFrameworkCore;

namespace Identity.Data;

public class UsersRepository : IUsersRepository
{
    private readonly IdentityDbContext _context;


    public UsersRepository(IdentityDbContext context)
    {
        _context = context;
    }


    public async Task AddAsync(User user)
    {
        _context.Add(user);
        await _context.SaveChangesAsync();
    }

    public async Task<List<User>> ListAsync()
    {
        return await _context.Users.ToListAsync();
    }

    public async Task<User> FindByEmailAsync(string email)
    {
        return (await _context.Users.FirstOrDefaultAsync(u => u.Email == email))!;
    }

    public async Task ChangeUserRoleToAdminAsync(string email)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
        user.Role = Roles.Admin;
        await _context.SaveChangesAsync();
    }

    public async  Task<Roles> GetUserRole(string email)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
        return user.Role;
    }
}