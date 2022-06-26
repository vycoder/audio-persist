package com.josephharveyangeles.capacitor.plugin.audiopersist;

import android.util.Log;

public class AudioPersist {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }

    public void initialize() {
        Log.i("Initializing... no-op for Android.");
        return;
    }
}
