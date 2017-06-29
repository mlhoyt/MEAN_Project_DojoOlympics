#!/usr/bin/env perl

for( my $i = 1; $i <= 9; ++$i ) {
  my $t = `cat ${i}t.txt`; chomp( $t ); $t =~ s/(\\n)*$//;
  my $q = `cat ${i}q.js | ../txt2string.pl`; chomp( $q ); $q =~ s/(\\n)*$//;
  my $a = `cat ${i}a.out | ../txt2string.pl`; chomp( $a ); $a =~ s/(\\n)*$//;

  print "db.questions.insert({topic:\'${t}\',text:\'${q}\',answer:\'${a}\'})\n";
  print "q = db.questions.findOne({topic:\'${t}\'})\n";
  print "db.exams.update({_id: e._id},{\$push: {q_series: q._id}})\n";
}

