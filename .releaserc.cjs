module.exports = {
  branches: ["main"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        releaseRules: [
          { type: "feat", release: "minor" },
          { type: "fix", release: "patch" },
          { type: "build", release: "patch" },
          { type: "build", breaking: true, release: "major" },
          { type: "chore", release: "patch" },
          { type: "chore", breaking: true, release: "major" },
          { breaking: true, release: "major" },
          { type: "perf", release: "patch" },
          { type: "perf", breaking: true, release: "major" }
        ],
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"]
        }
      }
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        presetConfig: {
          types: [
            { type: "feat", section: "Features" },
            { type: "fix", section: "Bug Fixes" },
            { type: "test", section: "Tests", hidden: true },
            { type: "build", section: "Build System and Dependencies" },
            { type: "chore", section: "Miscellaneous Chores" },
            { type: "perf", section: "Performance Improvements" },
            { type: "refactor", section: "Code Refactoring", hidden: true },
            { type: "docs", section: "Documentation", hidden: true },
            { type: "style", section: "Styles", hidden: true },
            { type: "ci", section: "Continuous Integration", hidden: true }
          ]
        },
        writerOpts: {
          formatDate: (date) => {
            const parsedDate = new Date(date);
            return Number.isNaN(parsedDate.getTime())
              ? null
              : parsedDate.toISOString().slice(0, 10);
          }
        }
      }
    ],
    "@semantic-release/github",
    [
      "@semantic-release/exec",
      {
        prepareCmd: "pnpm version ${nextRelease.version} --no-git-tag-version --allow-same-version",
        publishCmd: "pnpm publish --provenance --access public"
      }
    ],
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "pnpm-lock.yaml"],
        message: "chore(release): ${nextRelease.version} [skip ci]"
      }
    ]
  ]
};
