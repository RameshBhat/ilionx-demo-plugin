# Ilionx Demo Plugin for IBM Content Navigator

A custom IBM Content Navigator plugin that provides Ilionx branding and theming for the ECM desktop environment.

## Overview

This plugin integrates Ilionx brand elements into IBM Content Navigator, including:
- Custom CSS theming with Ilionx colors and branding
- Branded home page with company information
- Footer bar with Ilionx branding
- ECM banner styling with Ilionx theme

## Features

- **Custom Theming**: Applies Ilionx brand colors (#e53e3e red, #2b6cb0 blue) to ECM interface
- **Branded Home Page**: Welcome page with Ilionx services overview and contact information
- **Footer Branding**: Persistent footer bar with Ilionx logo and tagline
- **Banner Styling**: Customized ECM banner with gradient and Ilionx branding
- **External Link Integration**: Direct access to official Ilionx website

## Technical Stack

- **Platform**: IBM Content Navigator 3.2.0
- **Build System**: Apache Maven
- **Frontend**: Dojo Toolkit JavaScript framework
- **Styling**: CSS3 with custom variables
- **Language**: Java (plugin backend), JavaScript (frontend modules)

## Project Structure

```
SampleICNPlugin/
├── pom.xml                           # Maven build configuration
├── src/
│   └── main/
│       ├── java/
│       │   └── com/ibm/icm/extension/custom/
│       │       └── ilionxDemoPlugin.java    # Main plugin class
│       └── webapp/
│           ├── ilionxDemoPlugin.js          # Frontend JavaScript module
│           └── css/
│               ├── variables.css            # Ilionx brand variables
│               └── ilionxDemoTheme.css      # Main theme stylesheet
├── target/                           # Maven build output
└── lib/
    └── navigatorAPI-3.1.0.jar      # IBM Navigator API
```

## Prerequisites

- Java 8 or higher
- Apache Maven 3.6+
- IBM Content Navigator 3.2.0+
- OpenShift CLI (for deployment)
- Navigator API JAR file (navigatorAPI-3.1.0.jar)

## Building the Plugin

### 1. Setup Dependencies

Before building, you need to install the Navigator API JAR to your local Maven repository:

```bash
# Install Navigator API to local Maven repository
mvn install:install-file -Dfile=lib/navigatorAPI-3.1.0.jar -DgroupId=com.ibm -DartifactId=navigatorAPI -Dversion=3.1.0 -Dpackaging=jar
```

This command installs the IBM Navigator API JAR from the `lib/` directory into your local Maven repository, making it available as a dependency for the build process.

### 2. Clone and Build

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd SampleICNPlugin
   ```

2. **Install Navigator API dependency** (if not done already):
   ```bash
   mvn install:install-file -Dfile=lib/navigatorAPI-3.1.0.jar -DgroupId=com.ibm.ecm -DartifactId=navigatorAPI -Dversion=3.1.0 -Dpackaging=jar
   ```

3. **Build with Maven**:
   ```bash
   mvn clean package
   ```

4. **Generated artifact**:
   ```
   target/ilionxDemoPlugin-0.0.1-SNAPSHOT.jar
   ```

## Installation

### Manual Installation

1. Build the plugin (see above)
2. Copy the JAR file to your IBM Content Navigator plugins directory
3. Restart the Content Navigator application
4. Configure the plugin in the ICN Admin Console

### OpenShift Deployment

For OpenShift environments:

```bash
# Copy plugin to running pod
oc cp target/ilionxDemoPlugin-0.0.1-SNAPSHOT.jar icp4adeploy-navigator-deploy-697cccb8c6-5krph:/opt/ibm/plugins/

# Restart navigator service if needed
oc rollout restart deployment icp4adeploy-navigator-deploy
```

## Configuration

1. **Admin Console**: Navigate to ICN Admin Console
2. **Plugins**: Go to Plugins section
3. **New Plugin**: Add the ilionxDemoPlugin JAR
4. **Desktop Configuration**: Enable the plugin for desired desktops
5. **Apply Changes**: Save and apply configuration

## Plugin Components

### Java Plugin Class (`ilionxDemoPlugin.java`)

```java
public class ilionxDemoPlugin extends Plugin {
    public String getCSSFileName() {
        return "css/ilionxDemoTheme.css";
    }
    
    public String getDojoModule() {
        return "ilionxDemoPlugin";
    }
}
```

### JavaScript Module (`ilionxDemoPlugin.js`)

- **IlionxHomePane**: Manages home page content with Ilionx branding
- **IlionxFooter**: Creates persistent footer with company branding
- **DOM Management**: Uses Dojo for dynamic content creation

### CSS Theming (`ilionxDemoTheme.css`)

- **Brand Colors**: Consistent Ilionx color scheme
- **Banner Styling**: Custom ECM banner with gradients
- **Footer Design**: Fixed bottom footer with branding
- **Responsive Layout**: Mobile-friendly design patterns

## Brand Guidelines

The plugin follows Ilionx brand guidelines:

- **Primary Color**: `#e53e3e` (Red)
- **Secondary Color**: `#2b6cb0` (Blue)
- **Tagline**: "experts in eenvoud"
- **Typography**: Clean, professional fonts
- **Logo Usage**: Consistent placement and sizing

## Development

### Local Development

1. **Setup Environment**:
   ```bash
   # Ensure Java and Maven are installed
   java -version
   mvn -version
   ```

2. **Install Navigator API Dependency**:
   ```bash
   # One-time setup: Install Navigator API to local Maven repo
   mvn install:install-file -Dfile=lib/navigatorAPI-3.1.0.jar -DgroupId=com.ibm.ecm -DartifactId=navigatorAPI -Dversion=3.1.0 -Dpackaging=jar
   ```

3. **Make Changes**: Edit source files in `src/main/`

4. **Build and Test**:
   ```bash
   mvn clean compile
   mvn package
   ```

5. **Deploy**: Copy JAR to ICN environment

### Code Style

- **Java**: Follow IBM Java coding standards
- **JavaScript**: Use Dojo patterns and conventions
- **CSS**: Use BEM methodology for class naming

## Troubleshooting

### Common Issues

1. **Plugin Not Loading**:
   - Verify JAR is in correct plugins directory
   - Check ICN server logs for errors
   - Ensure plugin is enabled in Admin Console

2. **CSS Not Applied**:
   - Clear browser cache
   - Verify CSS files are included in JAR
   - Check browser developer tools for 404 errors

3. **JavaScript Errors**:
   - Check browser console for errors
   - Verify Dojo module loading
   - Ensure DOM elements exist before manipulation

### Debugging

```bash
# Check plugin deployment
ls -la /opt/ibm/plugins/

# View ICN logs
tail -f /opt/ibm/logs/navigator.log

# Maven debug build
mvn clean package -X

# Verify Navigator API dependency installation
mvn dependency:tree | grep navigatorAPI

# Re-install Navigator API if needed
mvn install:install-file -Dfile=lib/navigatorAPI-3.1.0.jar -DgroupId=com.ibm.ecm -DartifactId=navigatorAPI -Dversion=3.1.0 -Dpackaging=jar
```

## Browser Compatibility

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Security Considerations

- **X-Frame-Options**: External sites may prevent iframe embedding
- **CORS**: Cross-origin requests require proper headers
- **Content Security Policy**: Ensure CSS/JS complies with CSP

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Create Pull Request

## License

This project is proprietary software developed for Ilionx integration with IBM Content Navigator.

## Contact

**Ilionx**
- Website: [https://www.ilionx.com/](https://www.ilionx.com/)
- Email: info@ilionx.com
- Phone: (088) 05 90 500
- Address: Van Deventerlaan 12, 3528 AG Utrecht, Netherlands

## Changelog

### Version 0.0.1-SNAPSHOT
- Initial plugin implementation
- Ilionx branding and theming
- Home page content integration
- Footer bar implementation
- ECM banner customization

---

**"experts in eenvoud"** - Bringing simplicity to complex IT environments.
