package com.Aluref.AlurefApp;

import android.content.DialogInterface;
import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

public class FileListActivity extends AppCompatActivity {

    private LinearLayout metalLadleContainer;
    private LinearLayout bathLadleContainer;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.file_list_activity);

        // Initialize containers
        metalLadleContainer = findViewById(R.id.metalLadleContainer);
        bathLadleContainer = findViewById(R.id.bathLadleContainer);

        // Add Metal ladle TextViews
        addClickableFiles(metalLadleContainer, "#b6b6b6", "Metal ladle", 52);

        // Add Bath ladle TextViews
        addClickableFiles(bathLadleContainer, "#39648d", "Bath ladle", 13);
    }

    // Handle clicks on clickable files
    public void onFileClicked(View view) {
        // You can customize this method to handle the click event

        // For now, let's open a dialog to ask for access type
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle("Select Access Type");
        builder.setItems(new CharSequence[]{"View Access", "Edit Access"}, new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                switch (which) {
                    case 0:
                        // View Access
                        openPageWithAccess(LadelFormActivity.VIEW_ACCESS);
                        break;
                    case 1:
                        // Edit Access
                        // You might want to implement authentication logic here
                        openPageWithAccess(LadelFormActivity.EDIT_ACCESS);
                        break;
                }
            }
        });
        builder.show();
    }

    private void openPageWithAccess(String accessType) {
        Intent intent = new Intent(this, LadelFormActivity.class);
        intent.putExtra("ACCESS_TYPE", accessType);
        startActivity(intent);
    }


    // Handle clicks on the plus icon to add new clickable files
    public void onAddFileClicked(View view) {
        // You can customize this method to add new clickable files dynamically
        // For now, let's show a toast message
        // Use the view parameter to determine which category was clicked (Metal ladle or Bath ladle)
        String category = getResources().getResourceEntryName(view.getId());
        Toast.makeText(this, "Add new " + category + " clicked", Toast.LENGTH_SHORT).show();
    }


    // Method to dynamically add clickable files to the container
    private void addClickableFiles(LinearLayout container, String backgroundColor, String labelText, int count) {
        for (int i = 0; i < count; i++) {
            TextView textView = new TextView(this);
            textView.setLayoutParams(new LinearLayout.LayoutParams(
                    LinearLayout.LayoutParams.MATCH_PARENT,
                    LinearLayout.LayoutParams.WRAP_CONTENT
            ));
            textView.setText(labelText);
            textView.setBackgroundColor(Color.parseColor(backgroundColor));
            textView.setPadding(16, 16, 16, 16);
            textView.setClickable(true);
            textView.setOnClickListener(this::onFileClicked);
            container.addView(textView);

            // Set the tag to identify the category in the onAddFileClicked method
            textView.setTag(labelText);
        }

        // Add a plus icon for adding new clickable files
        ImageView imageView = new ImageView(this);
        imageView.setLayoutParams(new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.WRAP_CONTENT,
                LinearLayout.LayoutParams.WRAP_CONTENT
        ));
        imageView.setImageResource(R.drawable.ic_action_name); // Add your plus icon drawable
        imageView.setPadding(16, 16, 16, 16);
        imageView.setClickable(true);
        imageView.setOnClickListener(this::onAddFileClicked);
        container.addView(imageView);

        // Set the tag to identify the category in the onAddFileClicked method
        imageView.setTag(labelText);
    }
}

