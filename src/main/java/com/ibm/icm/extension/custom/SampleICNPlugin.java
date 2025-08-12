package com.ibm.icm.extension.custom;

import java.util.Locale;
import com.ibm.ecm.extension.Plugin;
import com.ibm.ecm.extension.PluginAction;


public class SampleICNPlugin extends Plugin {

	@Override
	public String getId() {
		return "SampleICNPlugin";
	}

	@Override
	public String getName(Locale locale) {
		// TODO Auto-generated method stub
		return "SampleICNPlugin";
	}

	@Override
	public String getVersion() {
		// TODO Auto-generated method stub
		return "1.0";
	}

	@Override
	public String getScript() {
		return "SampleICNPlugin.js";
	}

}
