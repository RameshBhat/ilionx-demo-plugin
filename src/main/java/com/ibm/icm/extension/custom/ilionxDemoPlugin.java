package com.ibm.icm.extension.custom;

import java.util.Locale;
import com.ibm.ecm.extension.Plugin;


public class ilionxDemoPlugin extends Plugin {

	@Override
	public String getId() {
		return "ilionxDemoPlugin";
	}

	@Override
	public String getName(Locale locale) {
		return "Ilionx Demo Plugin with CSS Theme";
	}

	@Override
	public String getVersion() {
		return "1.0";
	}

	@Override
	public String getScript() {
		return "ilionxDemoPlugin.js";
	}

	/**
	 * Returns the dojo module for this plugin.
	 * This enables proper CSS and JS resource loading.
	 */
	@Override
	public String getDojoModule() {
		return "sampleicnDojo";
	}

	/**
	 * Returns the CSS file name to be loaded globally when the plugin is loaded.
	 * This CSS will be applied to the entire ICN desktop.
	 */
	@Override
	public String getCSSFileName() {
		return "css/ilionxDemoTheme.css";
	}


	/**
	 * Provide a description for the plugin.
	 */
	public String getDescription(Locale locale) {
		return "An Ilionx demo IBM Content Navigator plugin that demonstrates how to load custom CSS themes globally to enhance the desktop appearance.";
	}

}
