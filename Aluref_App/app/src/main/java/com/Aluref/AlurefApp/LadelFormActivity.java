package com.Aluref.AlurefApp;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;

public class LadelFormActivity extends AppCompatActivity {

    public static final String VIEW_ACCESS = "View Access";
    public static final String EDIT_ACCESS = "Edit Access";
    String accessType;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_ladel_form);

        // Retrieve the access type from the intent
        accessType = getIntent().getStringExtra("ACCESS_TYPE");


    }
}
