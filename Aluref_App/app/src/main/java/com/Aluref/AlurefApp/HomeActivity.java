package com.Aluref.AlurefApp;

import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class HomeActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
    }

    // Click handler for Ladles image
    public void onLadlesImageClick(View view) {
        Toast.makeText(this, "Ladles Clicked!", Toast.LENGTH_SHORT).show();
        // Add your logic for Ladles image click action here
    }

    // Click handler for Other Features (Coming Soon) image
    public void onOtherFeaturesImageClick(View view) {
        Toast.makeText(this, "Other Features Clicked!", Toast.LENGTH_SHORT).show();
        // Add your logic for Other Features image click action here
    }
}
