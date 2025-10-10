# MCP (Model Context Protocol) Server Setup Guide

## What are MCP Servers?

MCP servers extend Claude Code's capabilities by providing additional tools and integrations. They enable features like enhanced file operations, GitHub integration, web search, and more.

---

## Recommended MCP Servers

### Essential (Install These First)

#### 1. @modelcontextprotocol/server-github
**Purpose**: GitHub integration for managing issues, PRs, and repository operations

**Install**:
```bash
npm install -g @modelcontextprotocol/server-github
```

**What it provides**:
- Create and manage GitHub issues
- Review pull requests
- Search repositories
- Manage branches
- View commit history

**Configuration**:
You'll need a GitHub personal access token with `repo` scope.

**Usage in Claude Code**:
- "Create a GitHub issue for this bug"
- "Review the latest PR"
- "Show recent commits"

---

#### 2. @modelcontextprotocol/server-filesystem
**Purpose**: Enhanced file system operations

**Install**:
```bash
npm install -g @modelcontextprotocol/server-filesystem
```

**What it provides**:
- Better file search capabilities
- Advanced file operations
- Directory tree operations
- File watching

**Usage in Claude Code**:
- More efficient file searches
- Better context gathering
- Enhanced file operations

---

#### 3. @modelcontextprotocol/server-git
**Purpose**: Advanced Git operations beyond basic bash

**Install**:
```bash
npm install -g @modelcontextprotocol/server-git
```

**What it provides**:
- Git history analysis
- Branch management
- Merge conflict resolution
- Commit searching
- Git statistics

**Usage in Claude Code**:
- "Analyze git history for this file"
- "Find when this bug was introduced"
- "Show commit statistics"

---

### Highly Recommended

#### 4. mcp-server-fetch
**Purpose**: Enhanced web scraping and documentation fetching

**Install**:
```bash
npm install -g mcp-server-fetch
```

**What it provides**:
- Better web content fetching
- Documentation scraping
- API documentation access

**Usage in Claude Code**:
- Research documentation
- Fetch API references
- Check library versions

---

#### 5. @modelcontextprotocol/server-brave-search
**Purpose**: Web search capabilities

**Install**:
```bash
npm install -g @modelcontextprotocol/server-brave-search
```

**What it provides**:
- Search the web for solutions
- Find documentation
- Research best practices
- Check for known issues

**Configuration**:
Requires Brave Search API key (free tier available)

**Usage in Claude Code**:
- "Search for solutions to this error"
- "Find latest Next.js best practices"
- "Research Framer Motion animation patterns"

---

#### 6. @modelcontextprotocol/server-sequential-thinking
**Purpose**: Enhanced problem-solving for complex tasks

**Install**:
```bash
npm install -g @modelcontextprotocol/server-sequential-thinking
```

**What it provides**:
- Structured problem decomposition
- Step-by-step planning
- Complex refactoring guidance

**Usage in Claude Code**:
- "Help me refactor this complex component"
- "Plan the implementation of this feature"
- "Break down this architectural change"

---

### Nice to Have

#### 7. mcp-server-time
**Purpose**: Time and date utilities

**Install**:
```bash
npm install -g mcp-server-time
```

**What it provides**:
- Timezone conversions
- Date formatting
- Time-based calculations

---

#### 8. @modelcontextprotocol/server-memory
**Purpose**: Persistent memory across sessions

**Install**:
```bash
npm install -g @modelcontextprotocol/server-memory
```

**What it provides**:
- Remember context between sessions
- Store project-specific information
- Track ongoing tasks

**Usage in Claude Code**:
- Maintains context about your project
- Remembers previous conversations
- Tracks work in progress

---

## Installation Instructions

### Global Installation (Recommended)

Install servers globally so they're available for all projects:

```bash
# Essential servers
npm install -g @modelcontextprotocol/server-github
npm install -g @modelcontextprotocol/server-filesystem
npm install -g @modelcontextprotocol/server-git

# Highly recommended
npm install -g mcp-server-fetch
npm install -g @modelcontextprotocol/server-brave-search
npm install -g @modelcontextprotocol/server-sequential-thinking

# Optional
npm install -g mcp-server-time
npm install -g @modelcontextprotocol/server-memory
```

### Configuration

After installation, you'll need to configure MCP servers in your Claude Code settings.

**Location**: `~/.config/claude-code/` (or equivalent for your OS)

MCP servers are configured in Claude Code's main settings file, not in the project-specific `.claude/` directory.

---

## Setting Up MCP Servers in Claude Code

### Step 1: Install the Servers

Use the npm commands above to install servers globally.

### Step 2: Configure in Claude Code

MCP servers are configured in your Claude Code global settings, typically at:

**macOS/Linux**: `~/.config/claude-code/settings.json`
**Windows**: `%APPDATA%\claude-code\settings.json`

### Step 3: Enable in Project

If needed, enable project-specific MCP servers in `.claude/settings.local.json`:

```json
{
  "enableAllProjectMcpServers": false,
  "enabledMcpjsonServers": [
    "server-github",
    "server-git",
    "server-filesystem"
  ]
}
```

---

## Required API Keys

Some MCP servers require API keys:

### GitHub Server
**Required**: GitHub Personal Access Token

**How to get**:
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token with `repo` scope
3. Save token securely
4. Configure in Claude Code settings

### Brave Search Server
**Required**: Brave Search API Key

**How to get**:
1. Visit: https://brave.com/search/api/
2. Sign up for free tier
3. Get API key
4. Configure in Claude Code settings

---

## Usage Examples

### With GitHub Server
```
Claude, create a GitHub issue titled "Add lazy loading to page components"
with description including the technical approach and benefits
```

### With Brave Search
```
Claude, search for the latest best practices for Framer Motion
performance optimization in React 19
```

### With Sequential Thinking
```
Claude, help me plan the implementation of a new blog section with:
- Individual blog post pages
- Blog post listing
- Categories/tags
- RSS feed
Break this down into manageable steps
```

### With Git Server
```
Claude, analyze the git history for ProfileNavigation.tsx and
show me when the flame positioning logic was changed
```

---

## Troubleshooting

### Server Not Found
```bash
# Verify installation
npm list -g | grep mcp

# Reinstall if needed
npm install -g @modelcontextprotocol/server-github --force
```

### Permission Issues
```bash
# On macOS/Linux, may need to update npm global prefix
npm config set prefix ~/.npm-global
export PATH=~/.npm-global/bin:$PATH
```

### Server Not Starting
- Check Claude Code logs
- Verify API keys are configured
- Ensure servers are in PATH
- Restart Claude Code after installation

---

## Testing MCP Servers

After installation, test each server:

```
Claude, list available MCP servers
```

Claude should respond with the installed and configured servers.

---

## Updating MCP Servers

Keep servers up to date:

```bash
# Update all global packages
npm update -g

# Update specific server
npm update -g @modelcontextprotocol/server-github
```

---

## Uninstalling

To remove an MCP server:

```bash
npm uninstall -g @modelcontextprotocol/server-github
```

Then remove from Claude Code configuration.

---

## Priority Installation Order

For this project specifically, install in this order:

1. **server-github** - For managing this repository
2. **server-git** - For analyzing commit history
3. **server-filesystem** - For better file operations
4. **mcp-server-fetch** - For researching docs
5. **server-brave-search** - For finding solutions
6. **server-sequential-thinking** - For complex planning

The others are optional and can be added as needed.

---

## Benefits for This Project

### server-github
- Track issues and feature requests
- Manage pull requests
- Collaborate on code

### server-git
- Analyze when flame navigation was built
- Track visual overhaul changes
- Find introduction of bugs

### server-filesystem
- Efficiently search component files
- Better context gathering
- Faster file operations

### server-brave-search
- Research Next.js 15 best practices
- Find Framer Motion examples
- Solve specific errors

### server-sequential-thinking
- Plan new page additions
- Structure complex refactors
- Break down feature implementations

---

## Security Notes

- Store API keys securely
- Don't commit API keys to version control
- Use environment variables when possible
- Rotate keys periodically
- Review server permissions

---

## Further Reading

- MCP Documentation: https://modelcontextprotocol.io/
- Claude Code MCP Guide: Check official docs
- Community MCP Servers: https://github.com/topics/mcp-server

---

**Last Updated**: 2025-10-09

**Note**: MCP is an evolving standard. Check for new servers and updates regularly.
