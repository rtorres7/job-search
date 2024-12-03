import { render, screen } from "@testing-library/vue";
import MainNav from "@/components/Navigation/MainNav.vue";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";

describe("MainNav", () => {
  it("diplays company name", () => {
    render(MainNav);
    const companyName = screen.getByText("Tabion Careers");
    expect(companyName).toBeInTheDocument();
  });

  it("displays menu items for navigation", () => {
    render(MainNav);
    const navigationMenuItems = screen.getAllByRole("listitem");
    const navigationMenuTexts = navigationMenuItems.map((item) => item.textContent);
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life @ Tabion",
      "How We Hire",
      "Students",
      "Jobs",
    ]);
  });

  describe("when the user logs in", () => {
    it("displays user profile picture", async () => {
      render(MainNav);

      let profileImage = screen.queryByRole("img", { name: /user profile image/i });
      expect(profileImage).not.toBeInTheDocument();

      const loginButton = screen.getByRole("button", { name: /sign in/i });
      await userEvent.click(loginButton);

      profileImage = screen.getByRole("img", {
        name: /user profile image/i,
      });
      expect(profileImage).toBeInTheDocument();
    });
  });
});
