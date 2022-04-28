const FizzbuzService = require("../../../lib/services/FizzbuzzService");

describe("test for FizzbuzzService", () => {
    test("Asign FIZZ trick", () => {
        const explorer = {
            name: "Woopa9",
            githubUsername: "ajolonauta9",
            score: 9,
            mission: "java",
            stacks: [
                "javascript",
                "elixir",
                "groovy",
                "reasonML",
                "elm",
            ],
        };

        FizzbuzService.applyValidationInExplorer(explorer);

        expect(explorer.trick).toBe("FIZZ");
    });

    test("Asign BUZZ trick", () => {
        const explorer = {
            name: "Woopa10",
            githubUsername: "ajolonauta10",
            score: 10,
            mission: "java",
            stacks: [
                "javascript",
                "elixir",
                "groovy",
                "reasonML",
                "elm",
            ],
        };

        FizzbuzService.applyValidationInExplorer(explorer);

        expect(explorer.trick).toBe("BUZZ");
    });

    test("Asign FIZZBUZZ trick", () => {
        const explorer = {
            name: "Woopa15",
            githubUsername: "ajolonauta15",
            score: 15,
            mission: "node",
            stacks: [
                "javascript",
                "elixir",
                "groovy",
                "reasonML",
                "elm",
            ],
        };

        FizzbuzService.applyValidationInExplorer(explorer);

        expect(explorer.trick).toBe("FIZZBUZZ");
    });

    test("Asign score value trick", () => {
        const explorer = {
            name: "Woopa13",
            githubUsername: "ajolonauta13",
            score: 13,
            mission: "node",
            stacks: [
                "javascript",
                "elixir",
                "groovy",
                "reasonML",
                "elm",
            ],
        };

        FizzbuzService.applyValidationInExplorer(explorer);

        expect(explorer.trick).toBe(explorer.score);
    });
});
