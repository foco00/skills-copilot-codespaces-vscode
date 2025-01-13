function skillsMember()  {
    var member = {
        name: 'John Doe',
        age: 26,
        skills: ['JavaScript', 'React', 'Node'],
        getSkills: function() {
            return this.skills;
        }
    };
    console.log(member.getSkills());
}