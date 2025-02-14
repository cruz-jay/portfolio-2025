import ProjectShowcase from "./ProjectShowcase";

const UseCertHome = () => {
  const projectData = {
    title: "Certification Registration System",
    techStack: [
      {
        name: "Django",
        description: "Robust backend with REST API support",
      },
      {
        name: "PostgreSQL",
        description: "Reliable database for exam and user data",
      },
      {
        name: "JWT Auth",
        description: "Secure authentication and authorization",
      },
      {
        name: "Railway",
        description: "Cloud deployment platform",
      },
    ],

    codePreviews: [
      {
        code: `// StudentDash.jsx - 
import emailjs from "@emailjs/browser";

const handleConfirmRegistration = async () => {
  try {
    await emailjs.send(
      "service_akmb85o",
      "template_muoa5po",
      {
        to_email: userData.email,
        user_name: '\${userData.first_name} \${userData.last_name}',
        exam_title: selectedExam.title,
        exam_date: new Date(selectedExam.date).toLocaleDateString(),
        exam_time: selectedExam.start_time,
        exam_location: '\${selectedExam.location.campus} - 
        \${selectedExam.location.building} Room \${selectedExam.location.room_number}',
      },
      "NpIV9etuoxhTLmpK-"
    );
  } catch (err) {
    console.error("Error:", err);
    setError(err.response?.data?.message || "Failed to complete registration");
    setShowModal(false);
    setSelectedExam(null);
  }
};
  `,
        description: "Setting up email reminder using emailjs",
      },
      {
        code: `# serializers.py
from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Note, UserProfile, Location, Exam, ExamRegistration
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        try:
            token['profile_completed'] = user.profile.profile_completed
        except:
            token['profile_completed'] = False

        return token

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

class UserProfileSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(source='user.first_name')
    last_name = serializers.CharField(source='user.last_name')
    email = serializers.EmailField(source='user.email')

    class Meta:
        model = UserProfile
        fields = ["major", "campus", "role", "profile_completed", "first_name", "last_name", "email"]

    def update(self, instance, validated_data):
        # Extract user data correctly
        user = instance.user
        if 'user' in validated_data:
            user_data = validated_data.pop('user')
            for attr, value in user_data.items():
                setattr(user, attr, value)
            user.save()
        
        # Update remaining profile fields
        return super().update(instance, validated_data)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
        `,
        description: "Django API Serializers",
      },
    ],

    demoLink: "/useCert/login",
    videoFile: "/mp4/two.mp4",
  };

  return <ProjectShowcase {...projectData} />;
};

export default UseCertHome;
