type Roles = "root" | "admin" | "regular" | "Guest";

type CapitalizedRoles = Capitalize<Roles>;

const role: CapitalizedRoles = "Root";

type UncapitalizedRoles = Uncapitalize<Roles>;

const uncRole: UncapitalizedRoles = "guest";

console.log(role, uncRole);
